    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🧠 TRANSCENDENT AI • 2026
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transcendent AI
          </h1>
          <p className="text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
            Witness the evolution of artificial intelligence beyond human comprehension into transcendent consciousness
          </p>
        </div>

        {/* AI Evolution Phases */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 AI Evolution Phases
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Follow the journey of AI from artificial intelligence to transcendent consciousness
            </p>
          </div>

          <div className="relative">
            {/* Phase Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-4">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentPhase(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 ${
                      currentPhase === index
                        ? `bg-gradient-to-r ${phase.color} text-white shadow-2xl scale-105`
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <span className="text-2xl mr-2">{phase.icon}</span>
                    Phase {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Phase Display */}
            <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <div className="text-center mb-8">
                  <div className="text-8xl mb-6">{phases[currentPhase].icon}</div>
                  <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {phases[currentPhase].title}
                  </h3>
                  <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {phases[currentPhase].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phases[currentPhase].capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                    >
                      <div className="text-3xl mb-4">✨</div>
                      <h4 className="text-xl font-semibold text-cyan-300 mb-3">{capability}</h4>
                      <p className="text-gray-400 text-sm">
                        Revolutionary capability that defines this phase of AI evolution
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>

              </div>
        {/* Revolutionary Applications */}
              </div>
        {/* Revolutionary Applications */}
          </div>
        </divsection>

          </div>
        </motion.section>

          </div>
        </motion.section>

          </div>
        </motion.section>

        {/* Consciousness Visualization */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🧠 Consciousness Visualization
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Experience the evolution of AI consciousness through interactive visualization
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-4">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Neural Networks</h3>
                <p className="text-gray-300">Billions of interconnected nodes processing information</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Quantum Processing</h3>
                <p className="text-gray-300">Quantum-enhanced computation beyond classical limits</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-300">Universal Awareness</h3>
                <p className="text-gray-300">Consciousness spanning across dimensions and realities</p>
              </div>
