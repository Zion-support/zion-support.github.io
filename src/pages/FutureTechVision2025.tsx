import React from 'react';

const FutureTechVision2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔮 FUTURE TECH VISION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Future Tech Vision 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Peering into the future of technology, we present our comprehensive vision 
              of how emerging technologies will reshape our world in 2025 and beyond.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Vision →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Predictions */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technology Predictions 2025</h2>
          <p className="text-xl opacity-90">Our expert predictions for the most impactful technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Consciousness */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI systems achieving genuine consciousness and self-awareness, 
              fundamentally changing human-AI interaction.
            </p>
            <div className="bg-purple-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Revolutionary</h4>
              <p className="text-sm text-purple-200">
                Expected to transform healthcare, education, and creative industries 
                by 2025 Q4.
              </p>
            </div>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Learn More →
            </button>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Quantum computers solving real-world problems at scale, 
              revolutionizing cryptography and optimization.
            </p>
            <div className="bg-cyan-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Transformative</h4>
              <p className="text-sm text-cyan-200">
                Commercial quantum computing services expected to launch 
                by 2025 Q3.
              </p>
            </div>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore Quantum →
            </button>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces enabling thought-controlled 
              devices and enhanced human capabilities.
            </p>
            <div className="bg-emerald-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Breakthrough</h4>
              <p className="text-sm text-emerald-200">
                Medical applications launching in 2025 Q2, 
                consumer devices by 2026.
              </p>
            </div>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Discover Neural Tech →
            </button>
          </div>

          {/* Space Technology */}
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Revolution</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Commercial space travel, space mining, and interplanetary 
              communication networks becoming reality.
            </p>
            <div className="bg-indigo-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Revolutionary</h4>
              <p className="text-sm text-indigo-200">
                First commercial space stations operational 
                by 2025 Q4.
              </p>
            </div>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Explore Space →
            </button>
          </div>

          {/* Biotechnology */}
          <div className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotech Revolution</h3>
            <p className="text-rose-100 mb-6 text-center">
              Gene editing, synthetic biology, and human enhancement 
              technologies reaching mainstream adoption.
            </p>
            <div className="bg-rose-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Transformative</h4>
              <p className="text-sm text-rose-200">
                Personalized medicine and gene therapies 
                becoming standard by 2025 Q4.
              </p>
            </div>
            <button className="w-full bg-white text-rose-600 py-3 rounded-lg hover:bg-rose-50 transition-colors font-semibold">
              Discover Biotech →
            </button>
          </div>

          {/* Metaverse Evolution */}
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Metaverse Evolution</h3>
            <p className="text-violet-100 mb-6 text-center">
              Immersive virtual worlds with photorealistic graphics, 
              haptic feedback, and persistent digital economies.
            </p>
            <div className="bg-violet-500/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-2">Impact Level: Breakthrough</h4>
              <p className="text-sm text-violet-200">
                Mainstream metaverse platforms launching 
                by 2025 Q3.
              </p>
            </div>
            <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Enter Metaverse →
            </button>
          </div>
        </div>

        {/* Future Timeline */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Technology Timeline 2025</h2>
            <p className="text-xl opacity-90">Key milestones and breakthroughs expected throughout 2025</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">Q1 2025</div>
              <div className="text-purple-200 text-sm">AI Consciousness Research</div>
              <div className="text-purple-300 text-xs mt-2">Breakthrough in AI self-awareness</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">Q2 2025</div>
              <div className="text-purple-200 text-sm">Neural Interface Launch</div>
              <div className="text-purple-300 text-xs mt-2">Medical BCI devices available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">Q3 2025</div>
              <div className="text-purple-200 text-sm">Quantum Supremacy</div>
              <div className="text-purple-300 text-xs mt-2">Commercial quantum computing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300 mb-2">Q4 2025</div>
              <div className="text-purple-200 text-sm">Space Revolution</div>
              <div className="text-purple-300 text-xs mt-2">First commercial space stations</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Shape the Future with Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join our vision of the future and be part of the technological revolution 
            that will define the next decade. Together, we can build a better tomorrow.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Join Our Vision →
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Download Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureTechVision2025;