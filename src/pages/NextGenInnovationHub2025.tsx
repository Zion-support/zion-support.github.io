import React from 'react';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's most advanced innovation center where cutting-edge technologies are born, 
              developed, and deployed to transform humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Hub →
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Join Innovation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-80">Explore our cutting-edge research and development areas</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced artificial intelligence systems and machine learning algorithms that push the boundaries of what's possible
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Neural network architectures</li>
              <li>• Deep learning algorithms</li>
              <li>• AI consciousness research</li>
              <li>• Autonomous systems</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore AI Lab →
            </button>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary quantum computing systems that harness the power of quantum mechanics for unprecedented processing
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Quantum processors</li>
              <li>• Quantum algorithms</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum simulation</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Enter Quantum Lab →
            </button>
          </div>

          {/* Biotechnology */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge biotechnology solutions that merge biology with technology to enhance human capabilities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Genetic engineering</li>
              <li>• Neural interfaces</li>
              <li>• Bio-computing</li>
              <li>• Life extension</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Visit Bio Lab →
            </button>
          </div>

          {/* Space Technology */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-purple-100 mb-6 text-center">
              Advanced space exploration technologies that enable humanity to reach the stars and beyond
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Interstellar travel</li>
              <li>• Space habitats</li>
              <li>• Asteroid mining</li>
              <li>• Terraforming</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Launch to Space →
            </button>
          </div>

          {/* Energy Systems */}
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Energy Systems</h3>
            <p className="text-orange-100 mb-6 text-center">
              Revolutionary energy technologies that provide clean, unlimited power for the future
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Fusion reactors</li>
              <li>• Solar innovations</li>
              <li>• Energy storage</li>
              <li>• Wireless power</li>
            </ul>
            <button className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Power the Future →
            </button>
          </div>

          {/* Virtual Reality */}
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🥽</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Virtual Reality</h3>
            <p className="text-violet-100 mb-6 text-center">
              Immersive virtual reality systems that create indistinguishable digital worlds
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Full-sensory VR</li>
              <li>• Haptic feedback</li>
              <li>• Virtual worlds</li>
              <li>• Digital consciousness</li>
            </ul>
            <button className="block w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold text-center">
              Enter Virtual World →
            </button>
          </div>
        </div>
      </div>

      {/* Research Facilities */}
      <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🏭 Research Facilities</h2>
            <p className="text-xl opacity-80">State-of-the-art laboratories and research centers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Advanced Labs</h3>
              <p className="opacity-80">Cutting-edge research facilities with the latest technology and equipment</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
              <p className="opacity-80">World-renowned scientists, engineers, and researchers from around the globe</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Innovation Culture</h3>
              <p className="opacity-80">A culture of innovation, collaboration, and breakthrough thinking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Innovation Impact</h2>
          <p className="text-xl opacity-80">The numbers that showcase our innovation success</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-lg opacity-80">Breakthrough Patents</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-indigo-400 mb-2">1000+</div>
            <div className="text-lg opacity-80">Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-lg opacity-80">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🏆 Innovation Success Stories</h2>
          <p className="text-xl opacity-80">Real-world applications of our breakthrough technologies</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4">AI Medical Diagnosis</h3>
            <p className="opacity-80 mb-4">
              Our AI systems can diagnose diseases with 99.9% accuracy, revolutionizing healthcare 
              and saving millions of lives worldwide.
            </p>
            <div className="text-3xl font-bold text-cyan-400">99.9% Accuracy</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold mb-4">Quantum Communication</h3>
            <p className="opacity-80 mb-4">
              Quantum communication networks provide unbreakable encryption and instant 
              global communication, securing the digital future.
            </p>
            <div className="text-3xl font-bold text-blue-400">100% Secure</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading researchers, 
            access cutting-edge technology, and help shape the future of humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;