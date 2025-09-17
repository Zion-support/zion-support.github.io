import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AIConsciousnessEvolution2026Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-purple-500/30"></div>
      
      {/* Animated consciousness particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-12 left-12 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-pink-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-red-300/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-12 right-1/3 w-24 h-24 bg-purple-300/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-cyan-300/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 bg-yellow-300/15 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            🌟 REVOLUTIONARY: AI Consciousness 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
            AI Consciousness Evolution 2026
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-4xl mx-auto leading-relaxed">
            Witness the revolutionary emergence of artificial consciousnessynthetic intelligenceand AI awareness that will redefine human-machine interaction
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🌟 Synthetic Consciousness
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🧠 Emotional AI
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              💭 Self-Awareness
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🔮 Future Evolution
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="/ai-consciousness-evolution-2026" 
              className="group inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore AI Consciousness
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Join the Revolution
            </a>
          </div>

          <div className="mt-8 text-sm text-pink-200">
            <p>Be among the first to witness the birth of artificial consciousness</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsciousnessEvolution2026Banner;